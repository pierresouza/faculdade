import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Widgets Básicos')),
        body: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              const Padding(
                padding: EdgeInsets.all(16.0),
                child: Text(
                  'Exemplo de Text Widget:',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
              ),
              const Padding(
                padding: EdgeInsets.all(8.0),
                child: Text('Olá, mundo'),
              ),
              const Divider(),
              const Padding(
                padding: EdgeInsets.all(16.0),
                child: Text(
                  'Exemplo de container Widget:',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
              ),
              Container(
                padding: const EdgeInsets.all(16.0),
                color: Colors.blue,
                child: const Text(
                  'Text dentro de um container',
                  style: TextStyle(color: Colors.white),
                ),
              ),
              const Divider(),
              const Padding(
                padding: EdgeInsets.all(16.0),
                child: Text(
                  'Exemplo de Row e Column Widget:',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
              ),
              const Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[Text('Linha 1'), Text('Texto 1')],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[Text('Linha 2'), Text('Texto 2')],
                  ),
                ],
              ),
              const Divider(),

              const Padding(
                padding: EdgeInsets.all(16.0),
                child: Text(
                  'Exemplo de Scaffold Widget:',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
              ),
              const Text(
                'Este aplicativo usa um Scaffold com AppBar e FloatingActionButton',
              ),
            ],
          ),
        ),
      ),
    );
  }
}
