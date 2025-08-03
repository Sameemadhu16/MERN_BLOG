import { Modal, Table, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function DashAdds() {
  const { currentUser } = useSelector((state) => state.user);
  const [userAdds, setUserAdds] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [addIdToDelete, setAddIdToDelete] = useState('');

  useEffect(() => {
    const fetchAdds = async () => {
      try {
        const res = await fetch(`/api/add/getAdds?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserAdds(data.adds);
          if (data.adds.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchAdds();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userAdds.length;
    try {
      const res = await fetch(
        `/api/add/getAdds?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserAdds((prev) => [...prev, ...data.adds]);
        if (data.adds.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteAdd = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/add/deleteAdd/${addIdToDelete}/${currentUser._id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserAdds((prev) =>
          prev.filter((add) => add._id !== addIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {/* Create New Add Button for Admin */}
      {currentUser.isAdmin && (
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-xl font-semibold text-gray-700 dark:text-gray-300'>
            Manage Advertisements
          </h2>
          <Link to='/create-add'>
            <Button gradientDuoTone='purpleToPink' size='sm'>
              Create New Ad
            </Button>
          </Link>
        </div>
      )}
      
      {currentUser.isAdmin && userAdds.length > 0 ? (
        <>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Ad image</Table.HeadCell>
              <Table.HeadCell>Ad title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {userAdds.map((add) => (
              <Table.Body key={add._id} className='divide-y'>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>
                    {new Date(add.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <img
                      src={add.image}
                      alt={add.title}
                      className='w-20 h-10 object-cover bg-gray-500'
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <div className='font-medium text-gray-900 dark:text-white'>
                      {add.title}
                    </div>
                  </Table.Cell>
                  <Table.Cell>{add.category}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setAddIdToDelete(add._id);
                      }}
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className='text-teal-500 hover:underline'
                      to={`/update-add/${add._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className='w-full text-teal-500 self-center text-sm py-7'
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <div className='text-center py-8'>
          <p className='text-gray-500 dark:text-gray-400 mb-4 text-lg'>
            You have no advertisements yet!
          </p>
          {currentUser.isAdmin && (
            <Link to='/create-add'>
              <Button gradientDuoTone='purpleToPink' size='lg'>
                Create Your First Advertisement
              </Button>
            </Link>
          )}
        </div>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this advertisement?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeleteAdd}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
