-- Inserts for populating place hodler data in burger_db > burger_table.--
-- Seed 3 devour BOOL left blank. Should default to 0 === false.

INSERT INTO burgers_table (id, burger_name, devoured) VALUES (1, 'Big Mac', true);
INSERT INTO burgers_table (id, burger_name, devoured) VALUES (2, 'Whopper', false);
INSERT INTO burgers_table (id, burger_name) VALUES (3, 'Baconator');