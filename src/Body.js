import React from 'react';

class Body extends React.Component {
    getSubmit(event) {
        event.preventDefault()
        const namaMantan = event.target.nama_mantan.value;
        const umurMantan = event.target.umur_mantan.value;

        this.props.saveStateMantan(namaMantan, umurMantan)

        event.target.nama_mantan.value = "";
        event.target.umur_mantan.value = "";
    }

    render() {
        return (
            <form action="#" onSubmit={this.getSubmit.bind(this)}>
                <br/>
                <input type="text" name="nama_mantan" placeholder="Nama Mantan ..."/>&nbsp;
                <input type="text" name="umur_mantan" placeholder="Umur Mantan ..."/>&nbsp;
                <input type="submit" value="simpan"/>
            </form>
        )
    }
}

export default Body;