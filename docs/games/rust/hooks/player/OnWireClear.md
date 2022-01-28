---
hide_table_of_contents: true
---

# OnWireClear

## Usage

* Useful for preventing clearing wires
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnWireClear(BasePlayer player, IOEntity entity1, int slot, IOEntity entity2, bool isInput)
{
    Puts("OnWireClear works!");
    return null;
}
```
