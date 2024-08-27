import React from 'react';
import { Form, Input, Select } from 'antd';
import propTypes from 'prop-types';
import { Button } from '../../components/buttons/buttons';
import { Modal } from '../../components/modals/antd-modals';
import { BasicFormWrapper } from '../styled';

const { Option } = Select;

function SupportCreate({ visible, onCancel, handleSubmit }) {
  // const [form] = Form.useForm();

  const handleOk = (value) => {
    handleSubmit(value);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal
      getContainer={false}
      type="primary"
      title="Abrir Chamado"
      visible={visible}
      footer={null}
      onCancel={handleCancel}
    >
      <div className="project-modal">
        <BasicFormWrapper>
          <Form name="supportCreate" onFinish={handleOk}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: 'email',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="subject"
              label="Titulo"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="priority" initialValue="high" label="Prioridade">
              <Select style={{ width: '100%' }}>
                <Option value="high">Alta</Option>
                <Option value="medium">Médio</Option>
                <Option value="low">Baixo</Option>
              </Select>
            </Form.Item>
            <Form.Item name="status" initialValue="open" label="Status">
              <Select style={{ width: '100%' }}>
                <Option value="open">Aberto</Option>
                <Option value="close">Fechado</Option>
                <Option value="pending">Pendente</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="description"
              label="Descrição"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button size="default" htmlType="submit" type="primary" key="submit" onClick={() => handleOk}>
                Enviar Chamado
              </Button>
            </Form.Item>
          </Form>
        </BasicFormWrapper>
      </div>
    </Modal>
  );
}

SupportCreate.propTypes = {
  visible: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
};

export default SupportCreate;
