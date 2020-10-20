import React, { useEffect } from 'react';
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
    	<home.Scroll>
			<home.Text mb={20} bold size={3}>Equipamentos de Segurança</home.Text>
				{epis.length > 0 && epis.map((epi: IEquipments) => (
					<home.Text>{epi.name}</home.Text>
				))}
			</home.Scroll>
    </home.WrapperContainer>
  )
};

export default Home;