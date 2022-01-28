---
hide_table_of_contents: true
---

# OnHelicopterRetire

## Usage

* Called before the patrol helicopter starts leaving the map.
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnHelicopterRetire(PatrolHelicopterAI helicopter)
{
    Puts("OnHelicopterRetire works!");
    return null;
}
```
