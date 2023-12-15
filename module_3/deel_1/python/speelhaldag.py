import math

# Speelhaldag
PRIJS_TOEGANG = 12.45
PERIODE_VIPSEAT = 5 # minuten
PRIJS_VIPSEAT = 0.65

aantal_toegang = int(input('Hoeveel spelers?\n'))
aantal_vipseat = int(input('Hoeveel spelers in de VIP seat?\n'))
time_vipseat = int(input('Hoelang in de VIP seat (minuten)?\n'))

totaal_toegang = aantal_toegang * PRIJS_TOEGANG
periodes_vipseat = math.ceil(time_vipseat / PERIODE_VIPSEAT) 
prijs_vipseat = periodes_vipseat * PRIJS_VIPSEAT
totaal_vipseat = aantal_vipseat * prijs_vipseat

totaal_betalen = totaal_toegang + totaal_vipseat

print('************** KASSA BON **************')
print(f'Toegang:           {aantal_toegang:3} x {PRIJS_TOEGANG:5.2f} = {totaal_toegang:6.2f}')
print(f'VIP seat periodes: {time_vipseat:3} / {PERIODE_VIPSEAT:5} = {periodes_vipseat:6.2f}')
print(f'VIP seat prijs pp: {periodes_vipseat:3} x {PRIJS_VIPSEAT:5.2f} = {prijs_vipseat:6.2f}')
print(f'VIP seat:          {aantal_vipseat:3} x {prijs_vipseat:5.2f} = {totaal_vipseat:6.2f}')
print('---------------------------------------')
print(f'Te betalen:                      {totaal_betalen:6.2f}')