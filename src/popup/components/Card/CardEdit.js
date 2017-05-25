import React from 'react';
import { isEditingCard, removeCard } from '../../actions/pack';
import { getIndexThingById } from '../../reducers/stateManipulate';

const CardEdit = ({
    dispatch,
    packs,
    indexOfPack,
    indexOfCard,
    handleClickCard,
    packageid
}) => {

    const handleCardFront = e => {
        dispatch(isEditingCard(e.target.value, 'front', packageid, indexOfCard));
    }

    const handleCardBack = e => {
        dispatch(isEditingCard(e.target.value, 'back', packageid, indexOfCard));
    }

    const handleRemoveCard = () => {
        handleClickCard();
        dispatch(removeCard(indexOfPack, indexOfCard));
    }

    return (
        <div className="card-edit-container">
            <div className="card-edit-content">
                <p>Termo</p>
                <input value={packs[indexOfPack].cards[indexOfCard].front}
                       onChange={handleCardFront}
                       placeholder="Digite o termo"></input>
            </div>

            <div className="card-edit-content">
                <p>Definição</p>
                <input value={packs[indexOfPack].cards[indexOfCard].back}
                       onChange={handleCardBack}
                       placeholder="Digite a definição"></input>
            </div>
            <div className="card-delete" onClick={handleRemoveCard}>
                <svg className="trash-card">
                    <use xlinkHref="#icon-trash"></use>
                </svg>
                <label>Apagar</label>
            </div>
        </div>
    );
}

export default CardEdit;
