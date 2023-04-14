# Imprimir requisitos para renovar la licencia
print("Requisitos para renovar la licencia:")
print("- Documento de identificación al día y en buen estado.")
print("- Dictamen médico digital para licencia vigente.")
print("- Multas de tránsito pagadas.")
print("- Menos de 12 puntos acumulados por infracciones de tránsito.")
# Definir variables
puntos = int(input("Ingrese la cantidad de puntos acumulados: "))
banco = input("¿Va a renovar la licencia en el Banco de Costa Rica? (si/no): ")
costo = 0
vigencia = 0
# Comprobar si la licencia está suspendida
if puntos >= 12:
    print("Su licencia está suspendida y no puede hacer la renovación.")
else:
    # Comprobar el costo y la vigencia de la nueva licencia
    if puntos < 4:
        costo = 5000
        vigencia = 6
    if puntos >= 5:
        if puntos <= 8:
            costo = 10000
            vigencia = 4
        if puntos <= 11:
            costo = 10000
            vigencia = 3
    # Agregar recargo del Banco de Costa Rica si aplica
    if banco == "si":
            costo += 4200
    # Imprimir el costo y la vigencia de la nueva licencia
    if costo != 0 and vigencia != 0:
        print("el costo de la renocación de la licencia es de" ,costo, " colones y la vigencia de la licencias es de " ,vigencia, "años")

costo = 0
vigente = 0 
if  puntos < 4:
    costo = 5000
    vigencia = 6
else:
 if puntos >= 4 and puntos <= 8:
    costo = 10000 