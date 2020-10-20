import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { requestEquipment } from '../../store/actions/equipments.action';
import { RootState } from '../../store/reducer';

import * as home from './styles';
interface IEquipments {
	name: string
};

const Home = () => {
	const epis = useSelector<RootState, Array<IEquipments>>(state => state.equipments.epi)
  const dispatch = useDispatch()
  
  useEffect(() => {
    initializeComponent();
  }, []);

	const initializeComponent = () => dispatch(requestEquipment());
	
  return (
    <home.WrapperContainer>
			{epis?.length > 0 ? (
				<home.Scroll>
					<home.Text mb={20} bold size={3}>Equipamentos de Segurança</home.Text>
						{epis.map((epi: IEquipments, index: number) => (
							<home.Text key={`${index}-${epi.name}`}>{epi.name}</home.Text>
						))}
				</home.Scroll>
			) : (
				<ActivityIndicator size="small" color="#08A4BD" />
			)}
    </home.WrapperContainer>
  )
};

export default Home;