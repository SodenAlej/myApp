import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Temperature</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Temperatura</IonCardTitle>
        <IonCardSubtitle> 22ºC</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Fecha</IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
