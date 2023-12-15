# pizza calculator

PRIJS_SMALL = 6.50
PRIJS_MEDIUM = 9.30
PRIJS_LARGE = 11.10

aantal_small = int(input('Hoeveel pizza\'s small?\n'))
aantal_medium = int(input('Hoeveel pizza\'s medium?\n'))
aantal_large = int(input('Hoeveel pizza\'s large?\n'))

totaal_small = aantal_small * PRIJS_SMALL
totaal_medium = aantal_medium * PRIJS_MEDIUM
totaal_large = aantal_large * PRIJS_LARGE
totaal = totaal_small + totaal_medium + totaal_large

print('************** KASSA BON *************')
print(f'Pizza\'s small:    {aantal_small:3} x {PRIJS_SMALL:5.2f} = {totaal_small:6.2f}')
print(f'Pizza\'s medium:   {aantal_medium:3} x {PRIJS_MEDIUM:5.2f} = {totaal_medium:6.2f}')
print(f'Pizza\'s small:    {aantal_large:3} x {PRIJS_LARGE:5.2f} = {totaal_large:6.2f}')
print('--------------------------------------')
print(f'Te betalen:                     {totaal:6.2f}')