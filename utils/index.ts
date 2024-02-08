

export async function fetchCars() {
    const headers = {
          'X-RapidAPI-Key': 'd87a3e3391mshb64dc4798058acbp145b42jsnec4292e39443',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
          }

          const responce  =  await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
            headers: headers,
          })
          const result = await responce.json();
          return result;
    }

