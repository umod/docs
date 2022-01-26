---
hide_table_of_contents: true
---

# OnOutputUpdate

## Usage

* Called when outputs of IOEntity are updated
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnOutputUpdate(IOEntity entity)
{
    Puts("OnOutputUpdate works!");
    return null;
}
```
