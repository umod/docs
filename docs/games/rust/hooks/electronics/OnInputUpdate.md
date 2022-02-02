---
hide_table_of_contents: true
---

# OnInputUpdate

## Usage

* Called when an input of IOEntity is updated
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnInputUpdate(IOEntity ioEntity, int inputAmount, int inputSlot)
{
    Puts("OnInputUpdate works!");
    return null;
}
```
