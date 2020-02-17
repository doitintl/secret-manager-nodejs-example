import { SecretManagerServiceClient } from '@google-cloud/secret-manager';


const GetSecret = async (nameVersion) => {
    console.log('Getting Secret');
    async function accessSecretVersion(nameVersion) {
        console.log('accessSecretVersion');
        const client = new SecretManagerServiceClient()
        const [version] = await client.accessSecretVersion({
          name: nameVersion,
        });
        const payload = version.payload.data.toString('utf8');
        console.log('Retrieved Secret');
        return payload;
    }

    const secret = await accessSecretVersion(nameVersion)
    .catch(function (error) {
        console.log(error);
    });
    console.log('Returning Secret');
    return secret;
}

const main = async () => {
    const secretPath = 'projects/andy-playground-264516/secrets/test-secret/versions/1'
    const secret = await GetSecret(secretPath)
    .catch((error) => {
      console.error(error);
    });  
    console.log(secret)
}

main();