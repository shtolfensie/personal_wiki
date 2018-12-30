# Basic Network

Brain.js supports multiple types of neural nets. In this entry a Feedforward NN will be described. See [Network Types](../../404.md) for all supported networks.

---

Table of Contents:

- [Basic Network](#basic-network)
  - [Initializing the network](#initializing-the-network)
  - [Training the Network](#training-the-network)

## Initializing the network

To create a network, the library needs to be imported or downloaded.

Then a new feedforward net can be created.

```javascript
let net = new brain.NeuralNetwork();
```

`NeuralNetwork()` accepts these options:

```typescript - i know. but JS fucks it up
hiddenLayers: [20,20], // array of ints for the sizes of the hidden layers in the network
activation: 'sigmoid' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
learningRate: 0.01,
// im not sure about these other ones, will check later
inputSize: 20,
inputRange: 20,
outputSize: 20,
decayRate: 0.999,
binaryThresh: 0.5,
leakyReluAlpha: 0.01 // supported for activation type 'leaky-relu'

let net = new brain.NeuralNetwork({ hiddenLayers: [3] });
```

## Training the Network

To train the network, training data needs to be provided.

The training patter should have an input and an output. These can be an array of numbers from `0` to `1` or a hash of these numbers.

```typescript
let trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

let trainingData = [
  { input: { r: 0.03, b: 0.5 }, output: { black: 1 } },
  { input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 } },
  { input: { r: 0.5, g: 0.5 }, output: { white: 1 } }
];

net.train(trainingData);
```

`train()` accepts these options as a second argument:

```typescript
net.train(data, {
  // Defaults values --> expected validation
  iterations: 20000, // the maximum times to iterate the training data --> number greater than 0
  errorThresh: 0.005, // the acceptable error percentage from training data --> number between 0 and 1
  log: false, // true to use console.log, when a function is supplied it is used --> Either true or a function
  logPeriod: 10, // iterations between logging out --> number greater than 0
  learningRate: 0.3, // scales with delta to effect training rate --> number between 0 and 1
  momentum: 0.1, // scales with next layer's change value --> number between 0 and 1
  callback: null, // a periodic call back that can be triggered while training --> null or function
  callbackPeriod: 10, // the number of iterations through the training data between callback calls --> number greater than 0
  timeout: Infinity // the max number of milliseconds to train for --> number greater than 0
});
```
