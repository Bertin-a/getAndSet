const robot = {
    model: '1E78V2',
    energyLevel: 100+400,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };

  const {energyLevel} = robot
  console.log(energyLevel)

  const{functionality}=robot
  functionality.beep()
  functionality.fireLaser()