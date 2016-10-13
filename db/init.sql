DO
$do$
BEGIN
  SET client_encoding = 'UTF8';

  -- INSERT YOUR DB INIT/UPDATE SCRIPT HERE

  CREATE TABLE public.sometable (
    id SERIAL PRIMARY KEY
  );
  ALTER TABLE public.sometable
    OWNER TO "dbuser";
END
$do$;
