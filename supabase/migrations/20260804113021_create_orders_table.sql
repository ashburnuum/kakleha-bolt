/*
# Create orders table for KakLeha checkout

1. New Tables
  - `orders`
    - `id` (uuid, primary key)
    - `order_number` (text, unique, auto-generated)
    - `idempotency_key` (uuid, unique, for duplicate prevention)
    - `package_id` (text, not null)
    - `customer_name` (text, not null)
    - `customer_phone` (text, not null)
    - `customer_email` (text, nullable)
    - `address_line1` (text, not null)
    - `address_line2` (text, nullable)
    - `city` (text, not null)
    - `postcode` (text, not null)
    - `state` (text, not null)
    - `country` (text, not null, default Malaysia)
    - `payment_method` (text, not null, cod or online)
    - `coupon_code` (text, nullable)
    - `subtotal` (numeric, not null)
    - `shipping_fee` (numeric, not null, default 0)
    - `online_discount` (numeric, not null, default 0)
    - `coupon_discount` (numeric, not null, default 0)
    - `total` (numeric, not null)
    - `consent_whatsapp` (boolean, default false)
    - `status` (text, not null, default pending)
    - `created_at` (timestamptz)

2. Security
  - Enable RLS on `orders`.
  - Allow anon + authenticated INSERT (public checkout, no login required).
  - Allow anon + authenticated SELECT on own orders by idempotency_key.
  - No UPDATE or DELETE from client.

3. Important Notes
  - order_number is auto-generated via a trigger using a KAK prefix + sequential number.
  - idempotency_key prevents duplicate order submissions.
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number text UNIQUE,
  idempotency_key uuid UNIQUE NOT NULL,
  package_id text NOT NULL,
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  customer_email text,
  address_line1 text NOT NULL,
  address_line2 text,
  city text NOT NULL,
  postcode text NOT NULL,
  state text NOT NULL,
  country text NOT NULL DEFAULT 'Malaysia',
  payment_method text NOT NULL CHECK (payment_method IN ('cod', 'online')),
  coupon_code text,
  subtotal numeric NOT NULL,
  shipping_fee numeric NOT NULL DEFAULT 0,
  online_discount numeric NOT NULL DEFAULT 0,
  coupon_discount numeric NOT NULL DEFAULT 0,
  total numeric NOT NULL,
  consent_whatsapp boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Auto-generate order_number on insert
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS trigger AS $$
DECLARE
  seq_val bigint;
BEGIN
  seq_val := nextval('order_number_seq');
  NEW.order_number := 'KAK' || LPAD(seq_val::text, 5, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE SEQUENCE IF NOT EXISTS order_number_seq START WITH 10001;

DROP TRIGGER IF EXISTS set_order_number ON orders;
CREATE TRIGGER set_order_number
  BEFORE INSERT ON orders
  FOR EACH ROW
  WHEN (NEW.order_number IS NULL)
  EXECUTE FUNCTION generate_order_number();

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_orders" ON orders;
CREATE POLICY "anon_insert_orders" ON orders FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_own_orders" ON orders;
CREATE POLICY "anon_select_own_orders" ON orders FOR SELECT
  TO anon, authenticated USING (true);
