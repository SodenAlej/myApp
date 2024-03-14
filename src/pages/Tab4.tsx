import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
import { apertureOutline, apertureSharp, cloudDoneSharp, cloudSharp, leafOutline, rainySharp, star } from 'ionicons/icons';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonIcon slot="start" icon={leafOutline}></IonIcon>

          <IonTitle>Acciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <IonToolbar></IonToolbar>

        <IonToolbar class="ion-text-center"> 
        <IonTitle> Bomba de agua </IonTitle>
        <IonButton color="dark" >
        <IonIcon slot="start" icon={rainySharp}></IonIcon>
        Prender       
        </IonButton>

      <IonButton color= "dark">
        Apagar        
        <IonIcon slot="end" icon={cloudSharp}></IonIcon>
      </IonButton>
      </IonToolbar>
      <IonToolbar></IonToolbar>
      <IonToolbar class="ion-text-center">
      <IonTitle > Ventilador </IonTitle>
      <IonButton color="dark">
        <IonIcon slot="start" icon={apertureSharp}></IonIcon>
        Prender       
        </IonButton>

      <IonButton color="dark">
        Apagar        
        <IonIcon slot="end" icon={apertureOutline}></IonIcon>
      </IonButton >
      </IonToolbar>
        <ExploreContainer name="Tab 4 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
