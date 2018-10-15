import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import './css/index.css';
import './css/fonts.css';
import './css/w3.css';

function Body(props) {
    return (
        <div id="body-div">
            <Header />
            <Cnpj
                cnpjTitle="Seu CNPJ / Razão Social:"
                cnpjValue="[SP] [19.427.033/0001-40] ARQUIVEI SERVICOS ON LINE LTDA"
            />
            <div className="existemnovasnotas">
                Existem novas notas contra seu CNPJ
            </div>
            <Table />
            <Ads
                vocePodeTerAsNotasDesc=""
            />
            <TryModal />
        </div>
    );
}

function Header(props) {
    return (
        <div id="header" className="theme-background">
            <div className="logo">
                <img src="./img/logo_branco.png" alt="Logo" className="logo1"/>
            </div>
        </div>
    );
}

function Cnpj(props) {
    return (
        <div className="cnpj">
            <div className="seucnpjraz343osoc">
                <span className="span1">
                    {props.cnpjTitle}
                    <br/>
                </span>
                <span className="span2">
                    {props.cnpjValue}
                </span>
            </div>
            <div className="line">
            </div>
        </div>
    );
}

function Table(props) {
    return (
        <div className="table">
            <TableHeader />
            <Rows />
            <VLine left="116px"/>
            <VLine left="208px"/>
            <VLine left="304px"/>
            <VLine left="592px"/>
            <VLine left="751px"/>
            <VLine left="992px"/>
        </div>
    );
}
function TableHeader(props) {
    return (
        <div className="table-header">
            <Cell
                left="16px"
                label="Status"
            />
            <Cell
                left="130px"
                label="Número"
            />
            <Cell
                left="217px"
                label="Emissão"
            />
            <Cell
                left="319px"
                label="Fornecedor"
            />
            <Cell
                left="608px"
                label="Valor"
            />
            <Cell
                left="773px"
                label="CNPJ"
            />
            <Cell
                left="1007px"
                label="Ação"
            />
        </div>
    );
}
function Cell(props) {
    return (
        <div className="cell" style={{left: props.left, width: props.width ? props.width : "auto"}}>
            {props.label}
        </div>
    );
}
class Rows extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            auth: null,
            number: null,
            emissionDate: null,
            provider: null,
            value: null,
            cnpj: null
        }
    }
    render() {
        let placeholder = "--";
        return (
            <div className="rows">
                <div className="authorized">
                    <div className="authorized1">{this.state.loaded ? this.state.auth : placeholder}</div>
                </div>
                <Cell
                    left="130px"
                    label={this.state.loaded ? this.state.number : placeholder}
                />
                <Cell
                    left="217px"
                    label={this.state.loaded ? this.state.emissionDate : placeholder}
                />
                <Cell
                    left="319px"
                    width="260px"
                    label={this.state.loaded ? this.state.provider : placeholder}
                />
                <Cell
                    left="608px"
                    label={this.state.loaded ? this.state.value : placeholder}
                />
                <Cell
                    left="773px"
                    label={this.state.loaded ? this.state.cnpj : placeholder}
                />
                <IconButton
                    left="1010px"
                    iconWidth="14px"
                    imgSrc="https://anima-uploads.s3.amazonaws.com/5ab41845a1ffdf000d05dabf/5bb7d4f7cf7a6500093eda50/5bb7d4f8cf7a65000aeb67be/img/pg-1-icon 1@2x.png"
                    label="Ver Nota"
                />
                <IconButton
                    left="1129px"
                    iconWidth="14px"
                    imgSrc="https://anima-uploads.s3.amazonaws.com/5ab41845a1ffdf000d05dabf/5bb7d4f7cf7a6500093eda50/5bb7d4f8cf7a65000aeb67be/img/pg-1-icon@2x.png"
                    label="Baixar XML"
                />
            </div>
        )
    };

    componentDidMount(){
        // Propably with a working api this would be the code used
        // $.post("some-api-url.php", function (data, status) {
        //     if(data.status === 1) {
        //
        //     }
        // })
        // .fail(function () {
        //     console.log("error");
        // });

        // This approach is being used only because this is a simulation
        // Here, because the design was made for only displaying one row, it uses data[0] for displaying data
        var client = new XMLHttpRequest();
        client.open('GET', '/res/initial-state.json');
        client.onreadystatechange = (() => {
            if(client.readyState == XMLHttpRequest.DONE) {
                let data = JSON.parse(client.responseText);
                console.log(data);

                let auth;
                data = data.networkGrowth.data[0];
                if(data.status === "authorized") {
                    auth = "AUTORIZADA";
                }
                else {
                    auth = "NÃO AUTORIZADA";
                }

                let number = data.number;

                let emissionDate = data.emissionDate;

                let provider = data.emitter.XNome;

                let value = data.value;

                let cnpj = data.emitter.CNPJ;

                this.setState( {
                    loaded: true,
                    auth: auth,
                    number: number,
                    emissionDate: emissionDate,
                    provider: provider,
                    value: value,
                    cnpj: cnpj
                });
            }
        });
        client.send();
    }
}
function VLine(props) {
    return (
        <div className="line" style={{left: props.left}}>

        </div>
    );
}
function IconButton(props) {
    return (
        <button className="w3-button icon-button" style={{left: props.left}}>
            <img src={props.imgSrc} alt="" style={{width: props.iconWidth, margin: "0px 4px 0px 0px"}}/>
            {props.label}
        </button>
    );
}

function Ads(props) {
    return (
        <div className="ads">
            <div className="">

            </div>
            <VocePodeTerAsNotas />
            <Cta
                buttonLabel="Experimentar o Arquivei"
            />
        </div>
    );
}
function VocePodeTerAsNotas(props) {
    return (
        <div className="voc352podeterasnot">
            <span>Você pode ter as notas de </span>
            <span className="bold">todos os seus fornecedores</span>
            <span>, que ter acesso a elas?</span>
            <span className="bold">Experimente grátis o Arquivei</span>
            <span> e tenha todas suas notas diretamente da </span>
            <span className="bold">Sefaz</span>
        </div>
    );
}
function Cta(props) {
    return (
        <div className="cta">
            <button className="w3-button cta-button">
                {props.buttonLabel}
            </button>
        </div>
    );
}

class TryModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };
    }

    render() {
        return (
            <div className="w3-hide">
                <Transparenci />
                <Modal />
            </div>
        );
    }
}
function Transparenci(props) {
    return (
        <div className="transparenci">

        </div>
    );
}
function Modal(props) {
    return (
        <div id="modal">

        </div>
    );
}

ReactDOM.render(
    <Body />,
    document.getElementById('root')
);

