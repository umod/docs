---
hide_table_of_contents: true
---

# OnInputUpdate

## Usage

* Called when an input of IOEntity is updated
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnInputUpdate(IOEntity entity, int inputAmount, int slot)
{
    Puts("OnInputUpdate works!");
    return null;
}
```
