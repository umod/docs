---
hide_table_of_contents: true
---

# OnOutputUpdate

## Usage

* Called when outputs of IOEntity are updated
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnOutputUpdate(IOEntity ioEntity)
{
    Puts("OnOutputUpdate works!");
    return null;
}
```
