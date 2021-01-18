PhoneFactory.$inject = ['$resource'];
/*ngInject*/
export default function PhoneFactory($resource) {
  return $resource('phones/:phoneId.json', {}, {
    query: {
      method: 'GET',
      params: {phoneId: 'phones'},
      isArray: true
    }
  });
}