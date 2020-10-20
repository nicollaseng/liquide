import styled from 'styled-components/native'

const normalizerFontSize = (size: number | undefined) => {
	const sizes = [12, 15, 18];
	const normalizedSize = sizes[size ?? 0] ?? 12;

	return normalizedSize
}

export const WrapperContainer = styled.View`
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Scroll = styled.ScrollView.attrs({
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center'
})``;

export const Text = styled.Text<{
	bold?: boolean;
	size?: number;
	mb?: number;
}>`
	margin-bottom: ${props => props.mb ?? 0}px;
	font-weight: ${props => props.bold ? 'bold' : 300};
	font-size: ${props => normalizerFontSize(props.size)}px;
`;