'use strict';

const { ServiceBroker } = require('moleculer');
const { ValidationError } = require('moleculer').Errors;
const TestService = require('../../services/math.service');

describe('Test "math" service', () => {
  let broker = new ServiceBroker();
  broker.createService(TestService);
  
  beforeAll(() => broker.start());
  afterAll(() => broker.stop());
  
  describe('Test "math.add" action', () => {
    
    it('should return with number 13', () => {
      const a = 5;
      const b = 7;
      expect(broker.call('math.add', { a, b })).resolves.toBe(a+b);
    });
    
  });
  
});

