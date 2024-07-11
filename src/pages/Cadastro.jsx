import React, { useEffect, useState, useRef } from 'react';
import { Flex, Form, Radio, Input, Space, DatePicker, Select } from 'antd';

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [tipoConta, setTipoConta] = useState("");
  const [estadoCivil, setEstadoCivil] = useState(null);
  const [numeroCelular, setNumeroCelular] = useState("");
  const [profissao, setProfissao] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log({ email, password, nome, dataNascimento, endereco,
       cpf, cnpj, tipoConta, estadoCivil, numeroCelular, profissao});
  }

  const [form] = Form.useForm(); 
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [value, setValue] = useState(1);


  const handleSelect = (e) => {
    setValue(e.target.value);
    form.resetFields();
  };

  useEffect(()=> {
    if (value === 2){
      setTipoConta("pj")
    }
  }, [value]);

  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (_, value) => {
    if (value && value !== form.getFieldValue('confirmPassword')) {
      return Promise.reject('As senhas não coincidem');
    } else {
      return Promise.resolve();
    }
  };

  return (
    <section className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-600 text-white p-16">
      <div className='my-4 text-white w-full max-w-md'>
        <h1 className='font-bold text-4xl'>Cadastro MVBank</h1>
      </div>
      <div className='bg-gray-700 md:p-8 rounded-lg flex flex-col text-white w-full max-w-md'>
        <h1 className='font-bold text-xl'>Selecione o tipo de conta</h1>
        <Radio.Group name="radiogroup" defaultValue={1} onChange={handleSelect} className='mt-2'> 
          <Radio value={1} className='text-white'>Conta pessoal</Radio>
          <Radio value={2} className='text-white font-semibold'>Conta PJ</Radio>
        </Radio.Group>
      </div>
      <Form
        name="layout-multiple-horizontal"
        form={form}
        layout="vertical"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        className='bg-gray-700 p-8 w-full max-w-md rounded-lg flex flex-col text-white mt-4'
        onSubmitCapture={handleSubmit}
      >
      {(value === 1) ?
      (<>
        <label className='font-bold text-xl mb-5'>Informações Pessoais</label>
        <Form.Item
          label={<span className="text-white font-semibold">Nome completo</span>}
          name="name"
          onChange={(e) => setNome(e.target.value)}
        >
          <Input placeholder="Digite o seu nome completo"  className='placeholder-zinc-400 text-white bg-gray-600 p-2 rounded outline-none border-none hover:bg-gray-600 focus:bg-gray-600' required/>
        </Form.Item>
        <Form.Item
          label={<span  className='text-white font-semibold'>CPF</span>}
          name="cpf"
          onChange={(e) => setCpf(e.target.value)}
        >
          <Input placeholder="Digite o seu CPF"  className='placeholder-zinc-400 text-white bg-gray-600 p-2 rounded border-none hover:bg-gray-600 focus:bg-gray-600' required/>
        </Form.Item>
        <Form.Item
        label={<span className='text-white font-semibold'>Tipo de conta</span>}
        >
        <select name="tipo-conta" required id="tipo-conta" className='text-white bg-gray-600 p-2 rounded' onChange={(e) => setTipoConta(e.target.value)}>
          <option value="" disabled selected hidden></option>
          <option value="cp-corrente" >Conta Corrente</option>
          <option value="cp-poupanca" >Conta Poupança</option>
        </select>
        </Form.Item>
        <Flex horizontal gap={6} className='text-white'>
        <Form.Item
          label={<span  className='text-white font-semibold'>Data de nascimento</span>}
          name="nascimento"
          className='text-white w-full'        >
          <DatePicker required placeholder='' onChange={(e) => setDataNascimento(e)} className=' placeholder-zinc-400 text-white bg-gray-600 p-2 rounded border-none hover:bg-gray-600 focus:bg-gray-600'/>
        </Form.Item>
        <Form.Item
        label={<span className='text-white font-semibold'>Estado Civil</span>}
        name="estadoCivil"
        className='w-full text-white'
      >
     <select name="estadoCivil" placeholder='Selecione um estado civil' className='placeholder-zinc-400 text-white bg-gray-600 rounded focus:bg-gray-700 hover:bg-gray-600 w-full p-2' onChange={(e) => setEstadoCivil(e.target.value)}>
        <option value="" disabled selected hidden></option>
        <option value="solteiro">Solteiro(a)</option>
        <option value="casado" >Casado(a)</option>
        <option value="separado">Separado(a)</option>
        <option value="divorciado">Divorciado(a)</option>
        <option value="viúvo">Viúvo(a)</option>
    </select>
      </Form.Item>
        </Flex>
        <Form.Item
          label={<span  className='text-white font-semibold'>E-mail</span>}
          name="email"
          className='w-full'
          onChange={(e) => setEmail(e.target.value)}
        >
          <Input placeholder="Digite o seu e-mail"  className='placeholder-zinc-400 text-white bg-gray-600 p-2 rounded border-none hover:bg-gray-600 focus:bg-gray-600 w-full' required/>
        </Form.Item>
        <Flex horizontal gap={12}>
        <Form.Item
          label={<span  className='text-white font-semibold'>Número do celular</span>}
          name="numeroCelular"
          className='w-full'
          onChange={(e) => setNumeroCelular(e.target.value)}
        >
          <Input placeholder="Digite o seu número de celular"  className='placeholder-zinc-400 text-white bg-gray-600 p-2 rounded border-none hover:bg-gray-600 focus:bg-gray-600' required/>
        </Form.Item>
        <Form.Item
        label={<span  className='text-white font-semibold font-semibold'>Profissão</span>}
        name="profissao"
        className='w-full'
        onChange={(e) => setProfissao(e.target.value)}
        > 
          <Input placeholder="Digite a sua profissão"  className='placeholder-zinc-400 text-white bg-gray-600 p-2 rounded border-none hover:bg-gray-600 focus:bg-gray-600' required/>
        </Form.Item>
        </Flex>
        <Form.Item
          label={<span  className='text-white font-semibold'>Endereço</span>}
          name="endereco"
          onChange={(e) => setEndereco(e.target.value)}
        >
          <Flex vertical gap={12}>
          <Input placeholder='País'  className='placeholder-zinc-400 text-white bg-gray-600 p-2 rounded border-none hover:bg-gray-600 focus:bg-gray-600' required/>
          <Input placeholder="Estado"  className='text-white placeholder-zinc-400 bg-gray-600 p-2 rounded border-none hover:bg-gray-600 focus:bg-gray-600' required/>
          <Input placeholder="Cidade"  className='text-white bg-gray-600 p-2 placeholder-zinc-400 rounded border-none hover:bg-gray-600 focus:bg-gray-600' required/>
          <Input placeholder="Rua"  className='text-white bg-gray-600 p-2 placeholder-zinc-400 rounded border-none hover:bg-gray-600 focus:bg-gray-600' required/>
          <Input placeholder="Número"  className='text-white bg-gray-600 p-2 rounded placeholder-zinc-400 border-none hover:bg-gray-600 focus:bg-gray-600' required/>
          <Input placeholder="CEP"  className='text-white bg-gray-600 p-2 rounded border-none placeholder-zinc-400 hover:bg-gray-600 focus:bg-gray-600' required/>
          </Flex>
        </Form.Item>
      </>) : (
        <>
          <h1 className='text-white font-bold text-xl'>Informações da Empresa</h1>
          <h2 className='text-white font-normal text-xs m-y-2 italic'>Forneça os dados da pessoa responsável pela empresa.</h2>
          <Form.Item
          label={<span className="text-white font-semibold">Nome completo</span>}
          name="name"
          className='mt-3'
          onChange={(e) => setNome(e.target.value)}
        >
          <Input placeholder="Digite o nome completo do responsável"  className='placeholder-zinc-400 text-white bg-gray-600 p-2 rounded outline-none border-none hover:bg-gray-600 focus:bg-gray-600' required/>
        </Form.Item>
        <Form.Item
          label={<span  className='text-white font-semibold'>CPF</span>}
          name="cpf"
          onChange={(e) => setCpf(e.target.value)}
        >
          <Input placeholder="Digite o  CPF do responsável"  className='placeholder-zinc-400 text-white bg-gray-600 p-2 rounded border-none hover:bg-gray-600 focus:bg-gray-600' required/>
        </Form.Item>
        <Form.Item
          label={<span  className='text-white font-semibold'>CNPJ</span>}
          name="cnpj"
          onChange={(e) => setCnpj(e.target.value)}
        >
          <Input placeholder="Digite o CNPJ da empresa"  className='placeholder-zinc-400 text-white bg-gray-600 p-2 rounded border-none hover:bg-gray-600 focus:bg-gray-600' required/>
        </Form.Item>
        <Form.Item
          label={<span  className='text-white font-semibold'>E-mail</span>}
          name="email"
          className='w-full'
          onChange={(e) => setEmail(e.target.value)}
        >
          <Input placeholder="Digite o e-mail do responsável"  className='placeholder-zinc-400 text-white bg-gray-600 p-2 rounded border-none hover:bg-gray-600 focus:bg-gray-600 w-full' required/>
        </Form.Item>
        <Form.Item
          label={<span  className='text-white font-semibold'>Número do celular</span>}
          name="numeroCelular"
          className='w-full'
          onChange={(e) => setNumeroCelular(e.target.value)}
        >
          <Input placeholder="Digite o número de celular do responsável"  className='placeholder-zinc-400 text-white bg-gray-600 p-2 rounded border-none hover:bg-gray-600 focus:bg-gray-600' required/>
        </Form.Item>
        <Form.Item
          label={<span  className='text-white font-semibold'>Endereço da empresa</span>}
          name="endereco"
          onChange={(e) => setEndereco(e.target.value)}

        >
          <Flex vertical gap={12}>
          <Input placeholder='País'  className='placeholder-zinc-400 text-white bg-gray-600 p-2 rounded border-none hover:bg-gray-600 focus:bg-gray-600' required/>
          <Input placeholder="Estado"  className='text-white bg-gray-600 placeholder-zinc-400 p-2 rounded border-none hover:bg-gray-600 focus:bg-gray-600' required/>
          <Input placeholder="Cidade"  className='text-white bg-gray-600 p-2 rounded border-none placeholder-zinc-400 hover:bg-gray-600 focus:bg-gray-600' required/>
          <Input placeholder="Rua"  className='text-white bg-gray-600 p-2 rounded border-none hover:bg-gray-600 placeholder-zinc-400 focus:bg-gray-600' required/>
          <Input placeholder="Número"  className='text-white bg-gray-600 p-2 rounded border-none hover:bg-gray-600 focus:bg-gray-600 placeholder-zinc-400' required/>
          <Input placeholder="CEP"  className='text-white bg-gray-600 p-2 rounded border-none hover:bg-gray-600 focus:bg-gray-600 placeholder-zinc-400' required/>
          </Flex>
        </Form.Item>
        </>
      )
    }
        <Form.Item
        label={<span className='text-white font-semibold'>Crie uma senha</span>}
        name="password"
        rules={[
          { validator: validatePassword, validateTrigger: 'onChange' }
        ]}
        hasFeedback
        validateStatus={passwordError ? 'error' : ''}
        help={passwordError || ''}
        className='m-0 mb-2 '
      >
        <Input.Password required placeholder="Digite a senha" className='placeholder-zinc-400 border-none p-2 bg-gray-600 hover:bg-gray-600 focus:bg-gray-600 text-white' onChange={() => setPasswordError('')} />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                setPassword(value);
                setButtonDisabled(false);
                return Promise.resolve();
              }
              setButtonDisabled(true);
              return Promise.reject('As senhas não coincidem');
            },
          }),
        ]}
        hasFeedback
        className='m-0 mb-2 '

      >
        <Input.Password  required placeholder="Confirme a senha" className='placeholder-zinc-400 border-none p-2 bg-gray-600 hover:bg-gray-600 focus:bg-gray-600 text-white' onChange={() => setPasswordError('')} />
      </Form.Item>
<button type="submit" disabled={buttonDisabled} className={`${buttonDisabled ? 'opacity-50' : 'hover:bg-blue-700'} active:bg-gray-700 bg-blue-600 py-2 rounded text-white mt-4 w-full`}>
          Concluir
        </button>
</Form>
    </section>
  );
};

export default Cadastro;
