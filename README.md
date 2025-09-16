# 💤 Sleep Quality Prediction using Fitbit Data

Predict sleep quality (Good/Bad) using data collected from Fitbit devices, applying a complete machine learning workflow from preprocessing to model evaluation.  
Built using Python, Scikit-learn, and XGBoost.  

---

## 📊 Problem Statement
Sleep is essential to health and well-being. Using activity and health data from Fitbit devices, this project aims to **predict sleep quality** (good or bad) based on a set of extracted features. This model can help identify patterns of poor sleep and support early lifestyle interventions.

<p align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbht5ErFs2CgopwkFQQe4TPVLvPa2YZyyfLA&s" alt="Sleep Tracking" width="500"/>
</p>
---

## 🚀 Project Pipeline

### 📌 1. **Data Collection & Understanding**
- Dataset: Fitbit sleep and activity data  
- Key Features:  
  - Total Minutes Asleep  
  - Total Time in Bed  
  - Calories  
  - Total Distance  
  - Very Active Minutes  
  - Sedentary Minutes  
- Target: **Sleep Quality (0 = Bad, 1 = Good)**  
- Target derived by calculating **Sleep Efficiency**:
  Sleep Efficiency = Total Minutes Asleep\Total Time in Bed
  
  - Sleep quality is **Good (1)** if efficiency ≥ 85% (based on National Sleep Foundation guidelines).

---

### 🧹 2. **Data Preprocessing**
- Dropped irrelevant columns: `ID`, `ActivityDate`
- Checked for missing values and cleaned data
- Performed feature correlation analysis using a heatmap
- Split dataset into **train/test sets** using stratified sampling
- Applied **feature scaling** using `StandardScaler` to normalize features

---

### 🧠 3. **Feature Selection**
- Used `SelectKBest` with `f_classif` to select top features
- Reduced dimensionality to improve model performance

---

### 🤖 4. **Model Training**
- Trained and compared several classifiers:
  - ✅ Logistic Regression  
  - ✅ Support Vector Machine (SVM)  
  - ✅ Random Forest  
  - ✅ **XGBoost (Best performer)**

---

### 🧪 5. **Model Evaluation**
- Evaluated each model using:
  - ✅ Accuracy Score  
  - ✅ Confusion Matrix  
  - ✅ Classification Report (Precision, Recall, F1-score)  
- Best Results from **XGBoost**:
  - Accuracy: **98.78%**
  - High recall for both good and bad sleep
  - Balanced and reliable performance

#### 🔁 Cross-Validation
- Applied **5-fold cross-validation** on XGBoost
- Mean Accuracy: **97.56%**
- Standard Deviation: **2.56%**
- ➤ Indicates stable and generalizable performance

---

## 🏁 Conclusion
XGBoost proved to be the most effective model, showing high accuracy and strong recall for both sleep classes. The model can be a useful step toward integrating ML in health monitoring tools, especially for users interested in tracking and improving sleep quality.

---

## 🧰 Tools & Libraries
- Python 🐍
- Pandas & NumPy 📊
- Scikit-learn 🤖
- XGBoost ⚡
- Matplotlib & Seaborn 📈



