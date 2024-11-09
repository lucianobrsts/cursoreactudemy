import styles from './CarDetail.module.css'

const CarDetail = ({ brand, color, km, model }) => {
  return (
    <div>
      <ul>
        <li>Marca: {brand}</li>
        <li>Cor: {color}</li>
        <li>Kilometragem: {km}</li>
        <li>Modelo: {model}</li>
      </ul>
    </div>
  );
};

export default CarDetail;
