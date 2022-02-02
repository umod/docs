---
hide_table_of_contents: true
---

# OnWireConnect

## Usage

* Useful for preventing a wire to connect
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnWireConnect(BasePlayer player, IOEntity input, int inputSlot, IOEntity output, int outputSlot)
{
    Puts("OnWireConnect works!");
    return null;
}
```
