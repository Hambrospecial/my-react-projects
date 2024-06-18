import styles from "./fooddetail.module.css";

export default function FoodDetailEquipment({ equipments }) {
  return (
    <div className={styles.ingredients}>
      <h2>Equipments:</h2>
      <ul>
        {equipments.map((equipments, index) => (
          <li key={index} className={styles.ingredient}>
            <ul>
              {equipments.equipment.map((equipment, index) => (
                <li key={index} className={styles.ingredient}>
                  <img
                    src={equipment.image}
                    alt={equipment.name}
                    className={styles.ingredientImage}
                  />
                  <div className={styles.ingredientDetails}>
                    <span className={styles.name}>{equipment.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
