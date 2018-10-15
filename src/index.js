import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import './css/index.css';
import './css/fonts.css';
import './css/w3.css';

class Body extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tryModalVisible: false,
            loadingModalVisible: false
        }
    }

    render() {
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
                    onClick={() => this.handleGreenBtnClick()}
                />
                <TryModal
                    active={this.state.tryModalVisible}
                    onClick={() => this.handleBlueBtnClick()}
                />
                <LoadingModal
                    active={this.state.loadingModalVisible}
                />
            </div>
        );
    }

    handleGreenBtnClick() {
        this.setState({
            tryModalVisible: true,
            loadingModalVisible: false
        });
    }
    handleBlueBtnClick() {
        this.setState({
            tryModalVisible: false,
            loadingModalVisible: true
        });

        // This timeout exists only because this is a simulation and the request would be very fast, so we wouldn't see the loading screen
        setTimeout(() => {
            // Propably with a working api this would be the code used:

            // $.post("some-api-url.php", (data, status) => {
            //    if(data.success) {
            //         this.setState({
            //             tryModalVisible: false,
            //             loadingModalVisible: false
            //         });
            //
            //         window.location.href = data.redirect;
            //     }
            //     else {
            //         this.setState({
            //             tryModalVisible: true,
            //             loadingModalVisible: false
            //         });
            //         // Error, should show some feedback for the user like a toast
            //     }
            // })
            // .fail(function () {
            //     console.log("error");
            // });

            //Here there is a simulation of call to api, and the returned value is controlled manually
            var client = new XMLHttpRequest();
            client.open('GET', '/res/migration-success.json');
            // client.open('GET', '/res/migration-failure.json');
            client.onreadystatechange = (() => {
                if(client.readyState === XMLHttpRequest.DONE) {
                    let data = JSON.parse(client.responseText);
                    if(data.success) {
                        this.setState({
                            tryModalVisible: false,
                            loadingModalVisible: false
                        });

                        //Simulating the creation of token that would come with the request result
                        let url = data.redirect.replace('some-unreadable-hash-token', token());

                        window.location.href = url;
                    }
                    else {
                        this.setState({
                            tryModalVisible: true,
                            loadingModalVisible: false
                        });
                        // Error, should show some feedback for the user like a toast
                    }
                }
            });
            client.send();
        }, 2000);

    }
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
                <a href="http://www.africau.edu/images/default/sample.pdf">
                    <IconButton
                        left="1010px"
                        iconWidth="14px"
                        imgSrc="https://anima-uploads.s3.amazonaws.com/5ab41845a1ffdf000d05dabf/5bb7d4f7cf7a6500093eda50/5bb7d4f8cf7a65000aeb67be/img/pg-1-icon 1@2x.png"
                        label="Ver Nota"
                    />
                </a>
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
        // Propably with a working api this would be the code used:

        // $.post("some-api-url.php", (data, status) => {
        //     if(data.status === 1) {
        //         let auth;
        //         data = data.networkGrowth.data[0];
        //         if(data.status === "authorized") {
        //             auth = "AUTORIZADA";
        //         }
        //         else {
        //             auth = "NÃO AUTORIZADA";
        //         }
        //
        //         let number = data.number;
        //
        //         let emissionDate = data.emissionDate;
        //
        //         let provider = data.emitter.XNome;
        //
        //         let value = data.value;
        //
        //         let cnpj = data.emitter.CNPJ;
        //
        //         this.setState( {
        //             loaded: true,
        //             auth: auth,
        //             number: number,
        //             emissionDate: emissionDate,
        //             provider: provider,
        //             value: value,
        //             cnpj: cnpj
        //         });
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
            if(client.readyState === XMLHttpRequest.DONE) {
                let data = JSON.parse(client.responseText);

                let auth;
                data = data.networkGrowth.data[0];
                if(data.status === "authorized") {
                    auth = "AUTORIZADA";
                }
                else {
                    auth = "NÃO AUTORIZADA";
                }

                //Most of these fields need some refactoring to display values in a readable way, but for now this is not done
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
        <button
            className="w3-button icon-button"
            style={{left: props.left}}
        >
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
                onClick={props.onClick}
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
            <button
                className="w3-button cta-button"
                onClick={props.onClick}
            >
                {props.buttonLabel}
            </button>
        </div>
    );
}

function TryModal(props) {
    let className;
    if(props.active) {
        className = "w3-show";
    }
    else {
        className = "w3-hide";
    }

    return (
        <div className={className}>
            <Transparenci />
            <Modal
                onClick={props.onClick}
            />
        </div>
    );
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
            <p className="title">
                Experimente grátis o Arquivei
            </p>
            <p className="text">
                Com <span className="bold">o Arquivei</span>, você terá acesso a <span className="bold">todas as notas</span> dos seus fornecedores, além de:
                <br/>
                <br/>
                • <span className="bold">Consulta</span> de seus <span className="bold">XMLs</span> direto da <span className="bold">Sefaz</span>;
                <br/>
                • <span className="bold">Alerta</span> de notas <span className="bold">canceladas</span>;
                <br/>
                • <span className="bold">Conhecimento</span> de notas <span className="bold">indevidas/frias</span>;
                <br/>
                <br/>
                <span className="bold">Tudo</span> isso <span className="bold">grátis</span> e sem compromisso.
            </p>
            <button
                className="w3-button cta"
                onClick={props.onClick}
            >
                Experimentar agora
            </button>
            <p className="terms">
                Ao continuar você aceita o <span className="alt">Termo de uso do Arquivei</span>.
            </p>
        </div>
    );
}

function LoadingModal(props) {
    let className;
    if(props.active) {
        className = "w3-show";
    }
    else {
        className = "w3-hide";
    }

    return (
        <div id="loadingModal" className={className}>
            <img className="factory" src="./img/factory.gif" alt="Loading"/>
            <p className="text">Descarregando para a nuvem</p>
            <img className="bar" src="https://anima-uploads.s3.amazonaws.com/5ab41845a1ffdf000d05dabf/5bb7d4f7cf7a6500093eda50/5bb7d66a386437000af38ab2/img/pg-3-status-bar.png" alt="Loading bar"/>
        </div>
    );
}

var rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function() {
    return rand() + rand(); // to make it longer
};

ReactDOM.render(
    <Body />,
    document.getElementById('root')
);

