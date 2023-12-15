# feestlunch
PRIJS_CROISSANT = 0.49
PRIJS_STOKBROOD = 1.92
PRIJS_KORTINGSBON = 0.25

aantal_stokbroden = int(input('Hoeveel stokbroden?\n'))
aantal_croissants = int(input('Hoeveel croissants?\n'))

totaal_croissants = aantal_croissants * PRIJS_CROISSANT
totaal_stokbroden = aantal_stokbroden * PRIJS_STOKBROOD
totaal_bedrag = totaal_croissants + totaal_stokbroden

max_kortingsbonnen = int(totaal_bedrag // PRIJS_KORTINGSBON)
aantal_kortingsbonnen = int(input(f'Hoeveel kortingsbonnen? (maximaal:{max_kortingsbonnen})\n'))
if aantal_kortingsbonnen > max_kortingsbonnen:
  aantal_kortingsbonnen = max_kortingsbonnen
  
totaal_korting = aantal_kortingsbonnen * PRIJS_KORTINGSBON
totaal_betalen = totaal_bedrag - totaal_korting

print('************ KASSA BON *************')
print(f'Croissants:     {aantal_croissants:3} x {PRIJS_CROISSANT:5.2f} = {totaal_croissants:6.2f}')
print(f'Stokbroden:     {aantal_stokbroden:3} x {PRIJS_STOKBROOD:5.2f} = {totaal_stokbroden:6.2f}')
print(f'Kortingsbonnen: {aantal_kortingsbonnen:3} x {PRIJS_KORTINGSBON:5.2f} = {totaal_korting:6.2f}')
print('------------------------------------')
print(f'Te betalen:                   {totaal_betalen:6.2f}')