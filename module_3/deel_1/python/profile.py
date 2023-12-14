# NAW invoer
print('=== Profile form ===')
name = input('Name: \n')
address = input('Street and number: \n')
zipcode = input('Zipcode:\n')
city = input('City: \n')

while True:
  print('\nYour Profile:\n---------------------------------')
  print(name)
  print(address)
  print(zipcode)
  print(city)
  print('---------------------------------')
  action = input('\nChange something in your profile?\n1: name, 2: address, 3: zipcode, 4: city\n')
  match action:
    case '1':
      name = input('Name: \n')
    case '2':
      address = input('Street and number: \n')
    case '3':
      zipcode = input('Zipcode:\n')
    case '4':
      city = input('City: \n')
    case _:
      break
  