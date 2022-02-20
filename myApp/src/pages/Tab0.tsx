import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab0.css';
import Web3 from "web3";
import Web3Modal from "web3modal";

const Tab3: React.FC = () => {

  let web3;

  const providerOptions = {
    /* See Provider Options Section */
  };

  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });

  const provider = web3Modal.connect().then((provider) => {
    web3 = new Web3(provider);
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 0</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 0</IonTitle>
          </IonToolbar>
        </IonHeader>
        [Page Content]
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
