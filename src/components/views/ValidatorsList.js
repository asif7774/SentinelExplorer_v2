import React from 'react';
import { SvgIcon } from '../common';
import { Link } from 'react-router-dom';
import DetailsBox from '../common/DetailsBox/DetailsBox';
import './CommonView.less';

const ValidatorListRow = ({url, Validatorname}) => {
    return (
        <Link to={url} className="validator-list-card">
            <div className="list-card-inner">
                <div className="list-left">
                    <div className="nameintial-circle">{(Validatorname.substring(0, 1))} </div>
                    <div className="validator-name">{Validatorname}</div>
                </div>
                <div className="list-right">
                    <SvgIcon name="arrow-right" viewbox="0 0 12 8" />
                </div>
            </div>
        </Link>
    )
}

const ValidatorsList = () => {
    return (
        <DetailsBox
            subtitle="Validators"
            subtitlelink="validators"
            >
            <div className="validator-list-wrapper">
                <ValidatorListRow 
                    Validatorname="Tall Tartan Kestrel"
                    url="validatordetails"
                />
                <ValidatorListRow 
                    Validatorname="Fluffy Opal Trout"
                    url="validatordetails"
                />
                <ValidatorListRow 
                    Validatorname="Exotic Topaz Tapir"
                    url="validatordetails"
                />
                <ValidatorListRow 
                    Validatorname="Virtual Clear Woodpecker"
                    url="validatordetails"
                />
                <ValidatorListRow 
                    Validatorname="Cold Boysenberry Monkey"
                    url="validatordetails"
                />
                <ValidatorListRow 
                    Validatorname="Tall Tartan Kestrel"
                    url="validatordetails"
                />
                <ValidatorListRow 
                    Validatorname="Dizzy Midnight Pheasant"
                    url="validatordetails"
                />
                <ValidatorListRow 
                    Validatorname="Fluffy Opal Trout"
                    url="validatordetails"
                />
            </div>
        </DetailsBox>
    )
}

export default ValidatorsList
