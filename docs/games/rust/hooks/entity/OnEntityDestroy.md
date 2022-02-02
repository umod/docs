---
hide_table_of_contents: true
---

# OnEntityDestroy

## Usage

* Called right before a CH47Helicopter or BradleyAPC is destroyed
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnEntityDestroy(BaseCombatEntity entity)
{
    Puts("OnEntityDestroy works!");
    return null;
}
```
