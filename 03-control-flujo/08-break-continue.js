let i = 0;
while (i < 6) {
  i++;

  if (i === 2) {
    console.log("Voy a saltar el 2");
    continue;
  }

  console.log(i);

  if (i === 5) {
    console.log("Voy a detener el ciclo");
    break;
  }
}
