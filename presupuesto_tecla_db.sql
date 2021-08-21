CREATE DATABASE presupuesto_tecla
GO

USE presupuesto_tecla
GO

SELECT * FROM usuarios

SELECT * FROM proyectos

SELECT * FROM presupuestos

SELECT * FROM ingresos

SELECT * FROM con_ingresos

SELECT * FROM costos

SELECT * FROM con_costos

SELECT * FROM gastos

SELECT * FROM con_gastos

SELECT SUM(cantidad) FROM ingresos WHERE DATEPART(month, fecha) = 8 AND presupuesto_id = '367603c0-006a-11ec-91f2-a35add4c1c1b';

SELECT concepto
FROM ingresos p
LEFT JOIN con_ingresos pcc ON p.concepto_id = pcc.id_concepto

SELECT cantidad
FROM con_ingresos p
RIGHT JOIN ingresos pcc ON p.concepto = pcc.concepto_id

SELECT fecha,cantidad,concepto
FROM ingresos p
INNER JOIN con_ingresos pcc ON p.presupuesto_id = 'fe93b820-01cd-11ec-9d0d-ef930b422c48' AND p.concepto_id = pcc.id_concepto 

SELECT fecha,cantidad,concepto,id_ingreso
FROM con_ingresos ci
INNER JOIN ingresos i ON i.presupuesto_id = '367603c0-006a-11ec-91f2-a35add4c1c1b' AND i.concepto_id = ci.id_concepto

SELECT fecha,cantidad,concepto,id_costo
FROM con_costos ci
INNER JOIN costos i ON i.presupuesto_id = '367603c0-006a-11ec-91f2-a35add4c1c1b' AND i.concepto_id = ci.id_concepto

SELECT fecha,cantidad,concepto,id_gasto
FROM con_gastos ci
INNER JOIN gastos i ON i.presupuesto_id = '367603c0-006a-11ec-91f2-a35add4c1c1b' AND i.concepto_id = ci.id_concepto