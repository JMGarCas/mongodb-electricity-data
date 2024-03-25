import swaggerAutogen from 'swagger-autogen';

const swaggerAutoGenInstance = swaggerAutogen();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/*.js']; // specify routes folder

const doc = {
  info: {
    title: 'Electricity Household Documentation',
    description: 'Project done by JMGarCas and Marchabar',
  }
};

swaggerAutoGenInstance(outputFile, endpointsFiles, doc);