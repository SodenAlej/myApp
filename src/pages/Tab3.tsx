import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { leafOutline } from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonIcon slot="start" icon={leafOutline}></IonIcon>

          <IonTitle>Planta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Agua</IonCardTitle>
        <IonCardSubtitle>Nivel de agua: </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Fecha</IonCardContent>
    </IonCard>
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

export default Tab3;
