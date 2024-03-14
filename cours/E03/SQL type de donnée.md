# SQL

## Les différents types de données

```sql
INT -- -2147483648 to +2147483647 (same as INTEGER)
DECIMAL -- up to 131072 digits before the decimal point; up to 16383 digits after the decimal point
DOUBLE -- idem
SERIAL -- autoincrementing integer from 1 to 2147483647

BOOLEAN -- true / false (same as BOOL)

TEXT -- string de n'importe quelle taille
VARCHAR(n) -- string de n character max
CHAR(n) -- string de n character exactement

DATE -- '1999-01-08'
TIME -- '04:05:06.789'
TIMESTAMP -- '2004-10-19 10:23:54'
TIMESTAMPTZ -- '2004-10-19 10:23:54TZ'

JSON -- '{"key": "value"}'
```
