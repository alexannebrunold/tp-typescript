console.log('Hello World');

function printStudentName(name : string) : void {
    const formattedName : string = name.toUpperCase();
    console.log(`L'étudiant s'appelle ${formattedName}`);
  }
  printStudentName("Arnaud")

  function printAlphabetically(items : string[]) : void {
    const sortedItems : string[] = items.sort();
    sortedItems.forEach(item => console.log(item));
  }

  printAlphabetically(["Salut", "Bonjour", "Coucou"])