For my dissertation thesis I chose to implement a Coronavirus statistics app for Romania using differencial privacy.
Differential privacy is a concept in data privacy that aims to protect the privacy of individuals while allowing access to their data for statistical analysis. It provides a mathematical framework for measuring the privacy guarantees of a data analysis algorithm, and ensures that the algorithm does not reveal any individual's sensitive information.

The basic idea behind differential privacy is to add a controlled amount of random noise to a dataset, in order to hide the information of any specific individual. This noise is added in a way that is calibrated to the sensitivity of the data, so that the privacy of individuals is protected while still preserving the overall statistical properties of the dataset.

The degree of privacy protection provided by differential privacy is controlled by a parameter called "epsilon". This parameter specifies the maximum amount by which the probability of a given output of a data analysis algorithm can change when one individual's data is added or removed from the dataset. A smaller value of epsilon implies a higher level of privacy protection, but at the cost of more noise being added to the dataset.

![covidscrrenshot](https://user-images.githubusercontent.com/62958497/235099753-c0628038-5cbf-4e82-8bfc-ddc73a0a82f4.PNG)
