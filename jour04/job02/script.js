function jsonValueKey(jsonString, key) {
    // Convertir la chaîne JSON en objet JavaScript
    const jsonObject = JSON.parse(jsonString);

    // Vérifier si la clé existe dans l'objet
    if (jsonObject.hasOwnProperty(key)) {
        // Retourner la valeur liée à la clé spécifiée
        return jsonObject[key];
    } else {
        // Retourner null si la clé n'existe pas
        return null;
    }
}

// Exemple d'utilisation :
const jsonString = '{"name": "Jeremy", "age": 23, "city": "Marseille"}';
const key = "city";
console.log(jsonValueKey(jsonString, key)); // Output: Marseille
