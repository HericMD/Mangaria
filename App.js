import { StyleSheet, Image, Text, View, Button } from 'react-native';
import Carrinho from './components/Carrinho';

function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.poster}>
        <Image style={styles.capa} source={{ uri: props.livro.capa }} />
        <Text style={styles.texto}>{props.livro.titulo} </Text>
        <Text style={styles.texto}> R$ {props.livro.preco}.99 </Text>
      </View>
      <Carrinho />
    </View>
  );
}



export default function App() {
  
  const livros = [
    {
      capa: 'https://m.media-amazon.com/images/I/51olydUbI6L._SX346_BO1,204,203,200_.jpg',
      titulo: 'One Piece',
      preco: 50,
    },
    {
      capa: 'https://m.media-amazon.com/images/I/51Qyj-tfh8L.jpg',
      titulo: 'Vagabond',
      preco: 77,
    },
    {
      capa: 'https://m.media-amazon.com/images/I/71GzNMbZJKL.jpg',
      titulo: 'Hanako-kun',
      preco: 69,
    },
    {
      capa: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/002/343/771/products/122-bc3ac1d77f0e1b796816613606209462-640-0.jpg',
      titulo: 'JOJO part7',
      preco: 44,
    },
    {
      capa: 'https://upload.wikimedia.org/wikipedia/en/b/b2/UQ_Holder_Vol_1_Cover.jpg',
      titulo: 'UQ Holder',
      preco: 20,
    },
    {
      capa: 'https://m.media-amazon.com/images/I/71bELfIWTDL.jpg',
      titulo: 'Boku no Hero',
      preco: 63,
    },
    {
      capa: 'https://cm.blazefast.co/b9/32/b9325abdf6b2db5f491412bf1be5a6c2.jpg',
      titulo: 'Death Note',
      preco: 59,
    },
    {
      capa: 'https://m.media-amazon.com/images/I/51W6wPKu6JL.jpg',
      titulo: 'Demon Slayer',
      preco: 24,
    },
    {
      capa: 'https://m.media-amazon.com/images/I/913R97KhPgL.jpg',
      titulo: 'Konosuba',
      preco: 23,
    },
    {
      capa: 'https://m.media-amazon.com/images/I/517TuvmxkxL._SX331_BO1,204,203,200_.jpg',
      titulo: 'Bleach',
      preco: 94,
    },
    {
      capa: 'https://m.livrariafonomag.futurasistemas.com.br/image/cache/data/eftr/Img_ftr_rp_8801-300x300.JPG?version=20230202185657',
      titulo: 'Darling',
      preco: 34,
    },
  ];

  finalizarcompra = () => {
    alert('Valor a pagar: ' + {livros})
}

  return (
    <View>
      <View style={styles.header}>
        <Text style={{ fontSize: 30, marginBottom: 20 }}> Mangás </Text>
      </View>
      <View style={styles.content}>
        {livros.map((livro) => (
          <Card livro={livro} />
        ))}
      </View>
      <View>
        <Button title="Finalizar compra" onPress={() => this.finalizarcompra()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    top: 10,
  },

  card: {
    flex: 1,
    flexDirection: 'row',
  },

  texto: {
    fontSize: 20,
    color: '#fff',
  },

  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#eda',
  },

  poster: {
    backgroundColor: '#bac',
    width: '45%',
    height: 275,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
  },

  capa: {
    resizeMode: 'scretch',
    width: '90%',
    height: 200,
    marginTop: 8,
    marginBottom: 8,
  },
});
