
export const days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
  ]
  
  export default function weekday() {
    let now = new Date().getDay()
    return days[now]
  }