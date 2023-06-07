import { Label, Checkbox } from 'flowbite-react';
import { FiBox } from 'react-icons/fi';

export default function FormNewProduct(props: any) {
  const {
    isEditing,
    inputValue,
    handleSave,
    handleEdit,
    handleInputChange,
    localCheck,
    deliveryCheck,
    setLocalCheck,
    setDeliveryCheck,
  } = props;

  return (
    <div>
      <div className="flex gap-4 items-center">
        <h1 className="m-4 text-neutral-600 font-semibold">Ubicación:</h1>
        {isEditing ? (
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="border rounded px-2 py-1"
          />
        ) : (
          <p>{inputValue}</p>
        )}
        <button
          onClick={isEditing ? handleSave : handleEdit}
          className="bg-transparent text-darkBlue text-xs rounded pl-4 py-2"
        >
          {isEditing ? 'Guardar' : 'Editar'}
        </button>
      </div>
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4">
          <p className="text-neutral-600 text-lg">Selecciona los métodos de envío</p>
          <div className="flex items-center justify-between bg-neutral-100 p-4">
            <div className="flex items-center gap-2">
              <Checkbox
                id="store"
                checked={deliveryCheck}
                onClick={() => setDeliveryCheck(!deliveryCheck)}
              />
              <Label htmlFor="store">Retiro en tienda</Label>
            </div>
            <div>
              <FiBox className="text-darkBlue" size={18} />
            </div>
          </div>
          <div className="flex items-center justify-between bg-neutral-100 p-4">
            <div className="flex items-center gap-2">
              <Checkbox
                id="store"
                checked={localCheck}
                onClick={() => setLocalCheck(!localCheck)}
              />
              <Label htmlFor="store">Entrega</Label>
            </div>
            <div>
              <p className="text-xs font-semibold">
                Mercado <span className="text-darkBlue">C</span>ountry
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
