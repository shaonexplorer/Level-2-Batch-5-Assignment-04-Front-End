import { CalendarIcon, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  useBorrowBookByIdMutation,
  useDeleteBookByIdMutation,
  useGetBookByIdQuery,
  useUpdateBookByIdMutation,
} from "@/redux/api/book.api";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

function ActionDialog({ book }) {
  const [dropDown, setDropDown] = useState(false);
  const [dialog1, setDialog1] = useState(false);
  const [dialog3, setDialog3] = useState(false);
  const [foundBook, setFoundBook] = useState();
  const [openPop, setOpenPop] = useState(false);

  const { data, isLoading } = useGetBookByIdQuery(book._id);
  const [updateBook, { isLoading: isCreating }] = useUpdateBookByIdMutation();
  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookByIdMutation();
  const [borrowBook, { isLoading: isBorrowing }] = useBorrowBookByIdMutation();

  useEffect(() => {
    if (data && !isLoading) setFoundBook(data.data);
  }, [isLoading, data]);

  const form = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await updateBook({ id: book._id, ...data });
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    form.reset();
    setDialog1(false);
    setDropDown(false);
  };

  const handleDelete = async () => {
    try {
      const res = await deleteBook(book._id);
      console.log(res);
      setDropDown(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onBorrow = async (data) => {
    try {
      const res = await borrowBook({ ...data, book: book._id });
      console.log(res);
      setDropDown(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={dialog1} onOpenChange={setDialog1}>
      <DropdownMenu open={dropDown} onOpenChange={setDropDown} modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DialogTrigger asChild>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
                // setDropDown(false);
              }}
            >
              Edit Book
            </DropdownMenuItem>
          </DialogTrigger>

          <DropdownMenuSeparator />

          <AlertDialog>
            <AlertDialogTrigger>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                Delete Book
              </DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your book information and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setDropDown(false)}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete} disabled={isDeleting}>
                  Delete Book
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Dialog open={dialog3} onOpenChange={setDialog3}>
            <DialogTrigger asChild>
              <DropdownMenuItem
                onSelect={(e) => {
                  e.preventDefault();
                }}
              >
                Borrow Book
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently update
                  your borrow information in the servers.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onBorrow)}
                  className="space-y-3"
                >
                  <FormField
                    control={form.control}
                    name="quantity"
                    defaultValue={1}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Book Quantity</FormLabel>
                        <FormControl>
                          <Input placeholder="Quantity" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is quantity of your book.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* date picker */}

                  <FormField
                    control={form.control}
                    name="dueDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Due Date</FormLabel>
                        <Popover open={openPop} onOpenChange={setOpenPop}>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              onDayClick={() => setOpenPop(false)}
                              disabled={(date) => date < new Date()}
                              captionLayout="dropdown"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormDescription>
                          This is due date for book return.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        onClick={() => setDropDown(false)}
                        variant="outline"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="submit" disabled={isBorrowing}>
                      Borrow Book
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently update your book
            information in the servers.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="title"
              defaultValue={foundBook?.title}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormDescription>This is title of your book.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author"
              defaultValue={foundBook?.author}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Author" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is author of your book.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              defaultValue={foundBook?.description}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is description of your book.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isbn"
              defaultValue={foundBook?.isbn}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ISBN Number</FormLabel>
                  <FormControl>
                    <Input placeholder="ISBN Number" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is ISBN number of your book.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="copies"
              defaultValue={foundBook?.copies}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Copies</FormLabel>
                  <FormControl>
                    <Input placeholder="Number of copies" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is number of your book copies.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="genre"
              defaultValue={foundBook?.genre}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select a Genre</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FICTION">FICTION</SelectItem>
                        <SelectItem value="NON_FICTION">NON-FICTION</SelectItem>
                        <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                        <SelectItem value="HISTORY">HISTORY</SelectItem>
                        <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                        <SelectItem value="FANTASY">FANTASY</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>This is genre of your book.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={() => setDropDown(false)} variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={isCreating}>
                Update Book
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ActionDialog;
